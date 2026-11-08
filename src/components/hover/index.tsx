"use client";
/**
 * Animált ikonok – Its Hover (https://www.itshover.com, Apache-2.0) + saját csepp ikon.
 * <HoverIcon name="radio" /> a legközelebbi [data-hover] őst (vagy a szülőt) figyeli:
 * egérrel rámutatásra / fókuszra animál; érintőképernyőn a láthatóvá váláskor egyszer lejátszik.
 */
import { useEffect, useRef, type ComponentType, type RefAttributes } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import Ambulance from "./ambulance-icon";
import ArrowRight from "./arrow-narrow-right-icon";
import Battery from "./battery-charging-icon";
import Checked from "./checked-icon";
import Clock from "./clock-icon";
import Copy from "./copy-icon";
import Download from "./download-icon";
import Droplet from "./droplet-icon";
import External from "./external-link-icon";
import Bell from "./filled-bell-icon";
import Flame from "./flame-icon";
import Home from "./home-icon";
import Instagram from "./instagram-icon";
import MapPin from "./map-pin-icon";
import Passport from "./passport-icon";
import Paw from "./paw-print-icon";
import Phone from "./phone-volume";
import Unplug from "./plug-connected-x-icon";
import Radio from "./radio-icon";
import Refresh from "./refresh-icon";
import Heart from "./scan-heart-icon";
import Shield from "./shield-check";
import Soup from "./soup-icon";
import Sparkles from "./sparkles-icon";
import Bag from "./travel-bag";
import Alert from "./triangle-alert-icon";
import Users from "./users-group-icon";
import Volume from "./volume-2-icon";
import Wallet from "./wallet-icon";

type IconC = ComponentType<AnimatedIconProps & RefAttributes<AnimatedIconHandle>>;
export const HOVER_ICONS = {
  ambulance: Ambulance, arrow: ArrowRight, battery: Battery, checked: Checked, clock: Clock, copy: Copy, download: Download,
  droplet: Droplet, external: External, bell: Bell, flame: Flame, home: Home, instagram: Instagram, mappin: MapPin,
  passport: Passport, paw: Paw, phone: Phone, unplug: Unplug, radio: Radio, refresh: Refresh, heart: Heart, shield: Shield,
  soup: Soup, sparkles: Sparkles, bag: Bag, alert: Alert, users: Users, volume: Volume, wallet: Wallet,
} satisfies Record<string, IconC>;
export type HoverIconName = keyof typeof HOVER_ICONS;

export function HoverIcon({ name, ...p }: AnimatedIconProps & { name: HoverIconName }) {
  const ref = useRef<AnimatedIconHandle>(null);
  const wrap = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const host = (el.closest("[data-hover]") as HTMLElement | null) ?? el.parentElement;
    if (!host) return;
    const on = () => ref.current?.startAnimation();
    const off = () => ref.current?.stopAnimation();
    host.addEventListener("mouseenter", on);
    host.addEventListener("mouseleave", off);
    host.addEventListener("focusin", on);
    host.addEventListener("focusout", off);
    let io: IntersectionObserver | undefined;
    if (window.matchMedia("(hover: none)").matches) {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setTimeout(on, 250);
          io?.disconnect();
        }
      }, { threshold: 0.8 });
      io.observe(el);
    }
    return () => {
      host.removeEventListener("mouseenter", on);
      host.removeEventListener("mouseleave", off);
      host.removeEventListener("focusin", on);
      host.removeEventListener("focusout", off);
      io?.disconnect();
    };
  }, []);
  const I = HOVER_ICONS[name] as IconC;
  return (
    <span ref={wrap} className="inline-flex shrink-0" aria-hidden>
      <I ref={ref} {...p} />
    </span>
  );
}
