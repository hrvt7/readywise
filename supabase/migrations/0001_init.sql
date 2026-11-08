-- Readywise – alapséma (Supabase / Postgres, EU régió ajánlott)
-- A tartalom (források, országszabályok, tételek) jelenleg a repóban, típusosan él
-- (src/lib/*.ts) – így verziókezelt és statikusan generálható. Ez a séma a
-- feliratkozókhoz és a forrásregiszter későbbi admin-felületéhez készült.

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (char_length(email) <= 254),
  consent_at timestamptz not null,
  locale text not null default 'hu',
  created_at timestamptz not null default now(),
  unsubscribed_at timestamptz
);

alter table public.subscribers enable row level security;
-- Nincs publikus policy: csak a szerver (service role) írhat/olvashat.

create table if not exists public.sources (
  id text primary key,
  publisher text not null,
  title text not null,
  region text not null,
  year text,
  url text not null,
  kind text not null check (kind in ('official','official-mirror','press')),
  checked date not null,
  content_hash text,             -- heti változásfigyeléshez
  status text not null default 'published'
    check (status in ('draft','source_checked','expert_approved','published','outdated')),
  updated_at timestamptz not null default now()
);

create table if not exists public.source_facts (
  id bigserial primary key,
  source_id text not null references public.sources(id) on delete cascade,
  fact text not null
);

create table if not exists public.country_rules (
  code text primary key,
  name text not null,
  official_days int,
  water_l_per_day numeric(4,2),
  status text not null check (status in ('official','partial','none')),
  headline text not null,
  updated_at timestamptz not null default now()
);

alter table public.sources enable row level security;
alter table public.source_facts enable row level security;
alter table public.country_rules enable row level security;

create policy "public read sources" on public.sources for select using (status = 'published');
create policy "public read facts" on public.source_facts for select using (true);
create policy "public read rules" on public.country_rules for select using (true);
