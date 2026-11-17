"use client";

import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Coffee,
  Smartphone,
  Clock,
  MessageSquare,
  ShieldAlert,
  Gift,
  Smile,
  HeartHandshake,
  Flame,
} from "lucide-react";

interface GuideItem {
  icon: React.ReactNode;
  text: string;
}

const dosItems: GuideItem[] = [
  {
    icon: <Coffee className="h-5 w-5" />,
    text: "Bring her coffee in the morning without being asked",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    text: 'Send "good morning" texts \u2014 yes, every single day',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    text: "Remember important dates (her birthday is NOT optional)",
  },
  {
    icon: <Smile className="h-5 w-5" />,
    text: "Compliment her genuinely, not just when you want something",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    text: "Take her side in public (discuss disagreements privately)",
  },
  {
    icon: <Gift className="h-5 w-5" />,
    text: "Random small surprises beat one expensive gift a year",
  },
];

const dontsItems: GuideItem[] = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    text: "Scroll your phone while she\u2019s telling you about her day",
  },
  {
    icon: <ShieldAlert className="h-5 w-5" />,
    text: '"Calm down" has literally never calmed anyone down \u2014 avoid it',
  },
  {
    icon: <Flame className="h-5 w-5" />,
    text: "Compare her to your mom\u2019s cooking (just\u2026 don\u2019t)",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    text: "Forget anniversaries. Set 17 alarms if you have to.",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    text: 'Reply with "k" to a paragraph she spent 20 minutes typing',
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    text: "Use the phrase \"you\u2019re overreacting\" \u2014 that\u2019s a game-ender",
  },
];

interface WarnSign {
  level: "low" | "medium" | "critical";
  title: string;
  description: string;
}

const warningSignsData: WarnSign[] = [
  {
    level: "low",
    title: "The Short Reply",
    description:
      'She replies "fine." with a period. That period holds the weight of a thousand unspoken words. Proceed with caution.',
  },
  {
    level: "medium",
    title: "The Silence",
    description:
      "She hasn\u2019t texted back in 2 hours but was active 3 minutes ago. You are now in the danger zone. Bring snacks.",
  },
  {
    level: "critical",
    title: "The Full Name Drop",
    description:
      "She uses your full government name. This is DEFCON 1. Drop everything. Apologize immediately. Do not pass Go. Do not collect \u0024200.",
  },
];

const levelStyles = {
  low: {
    border: "border-yellow-200",
    bg: "bg-yellow-50",
    badge: "bg-yellow-100 text-yellow-700",
    icon: "text-yellow-500",
  },
  medium: {
    border: "border-orange-200",
    bg: "bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
    icon: "text-orange-500",
  },
  critical: {
    border: "border-red-200",
    bg: "bg-red-50",
    badge: "bg-red-100 text-red-700",
    icon: "text-red-500",
  },
};

export default function SurvivalGuide() {
  return (
    <section
      id="survival-guide"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-pink-50 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-40 h-96 w-96 rounded-full bg-rose-50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
            <AlertTriangle className="h-4 w-4" />
            Critical Knowledge
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            The Survival{" "}
            <span className="bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">
              Guide
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-500 sm:text-lg">
            Everything Ali needs to remember to keep the peace, avoid disaster,
            and actually be a good boyfriend. Study carefully.
          </p>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {/* Do's Column */}
          <div className="rounded-2xl border-2 border-emerald-100 bg-gradient-to-b from-emerald-50/50 to-white p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-emerald-100 p-2">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-800">
                The Do&apos;s ✅
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {dosItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-emerald-50"
                >
                  <div className="mt-0.5 flex-shrink-0 text-emerald-500 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Don'ts Column */}
          <div className="rounded-2xl border-2 border-red-100 bg-gradient-to-b from-red-50/50 to-white p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-red-100 p-2">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-800">
                The Don&apos;ts ❌
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {dontsItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-red-50"
                >
                  <div className="mt-0.5 flex-shrink-0 text-red-500 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warning Signs Section */}
        <div id="fix-it">
          <div className="mb-10 text-center">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              ⚠️ Warning Signs Decoder
            </h3>
            <p className="mx-auto max-w-xl text-sm text-gray-500 sm:text-base">
              Learn to read the signs before it&apos;s too late. Threat levels
              ranked for your convenience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {warningSignsData.map((sign, index) => {
              const style = levelStyles[sign.level];
              return (
                <div
                  key={index}
                  className={`group rounded-2xl border-2 ${style.border} ${style.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <AlertTriangle className={`h-6 w-6 ${style.icon}`} />
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${style.badge}`}
                    >
                      {sign.level}
                    </span>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">
                    {sign.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {sign.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
