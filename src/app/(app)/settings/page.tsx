"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Save, RotateCcw, Trash2, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { CefrBadge } from "@/components/shared/cefr-badge";
import { useStore } from "@/store/useStore";
import { useToast } from "@/components/ui/toast";
import { CEFR_META, levelIndex } from "@/lib/cefr";
import { CEFR_LEVELS, type CefrLevel } from "@/types";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const router = useRouter();
  const profile = useStore((s) => s.profile);
  const updateProfile = useStore((s) => s.updateProfile);
  const resetProgress = useStore((s) => s.resetProgress);
  const deleteAccount = useStore((s) => s.deleteAccount);
  const pushToast = useToast((s) => s.push);

  const [name, setName] = React.useState(profile?.displayName ?? "");
  const [current, setCurrent] = React.useState<CefrLevel>(profile?.currentLevel ?? "B1");
  const [target, setTarget] = React.useState<CefrLevel>(profile?.targetLevel ?? "C1");
  const [goal, setGoal] = React.useState(profile?.dailyGoal ?? 7);

  if (!profile) return null;

  const dirty =
    name.trim() !== profile.displayName ||
    current !== profile.currentLevel ||
    target !== profile.targetLevel ||
    goal !== profile.dailyGoal;

  function save() {
    const safeTarget = levelIndex(target) >= levelIndex(current) ? target : current;
    updateProfile({
      displayName: name.trim() || "Investor",
      currentLevel: current,
      targetLevel: safeTarget,
      dailyGoal: goal,
    });
    setTarget(safeTarget);
    pushToast({ kind: "info", title: "Settings saved", description: "Your preferences are updated." });
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5 p-4 sm:p-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your profile, goals and data.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Display name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} maxLength={24} />
          </div>

          <div className="space-y-2">
            <Label>Current level</Label>
            <LevelRow value={current} onChange={setCurrent} />
          </div>
          <div className="space-y-2">
            <Label>Target level</Label>
            <LevelRow value={target} onChange={setTarget} minLevel={current} />
            <p className="text-xs text-muted-foreground">
              We prioritise {CEFR_META[target].name} ({target}) words while reviewing earlier levels.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Daily goal: <span className="font-bold text-primary tnum">{goal}</span> words</Label>
            <input
              type="range"
              min={5}
              max={10}
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              className="w-full accent-[hsl(var(--primary))]"
            />
          </div>

          <Button onClick={save} disabled={!dirty} variant="vault">
            <Save className="h-4 w-4" /> Save changes
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Database className="h-4 w-4" /> Data & storage
          </CardTitle>
          <CardDescription>
            FluentBank runs locally — your portfolio is stored in this browser. Connect Supabase
            (see README) to sync across devices.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row">
          <ConfirmDialog
            trigger={
              <Button variant="outline" className="w-full sm:w-auto">
                <RotateCcw className="h-4 w-4" /> Reset progress
              </Button>
            }
            title="Reset learning progress?"
            description="This clears your portfolio, XP, streak and history but keeps your profile. This cannot be undone."
            confirmLabel="Reset progress"
            onConfirm={() => {
              resetProgress();
              pushToast({ kind: "info", title: "Progress reset", description: "Your portfolio is empty again." });
            }}
          />
          <ConfirmDialog
            trigger={
              <Button variant="destructive" className="w-full sm:w-auto">
                <Trash2 className="h-4 w-4" /> Delete account
              </Button>
            }
            title="Delete everything?"
            description="This permanently removes your profile and all data from this browser and returns you to onboarding."
            confirmLabel="Delete everything"
            destructive
            onConfirm={() => {
              deleteAccount();
              router.replace("/onboarding");
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function LevelRow({
  value,
  onChange,
  minLevel,
}: {
  value: CefrLevel;
  onChange: (l: CefrLevel) => void;
  minLevel?: CefrLevel;
}) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {CEFR_LEVELS.map((l) => {
        const disabled = minLevel ? levelIndex(l) < levelIndex(minLevel) : false;
        const active = value === l;
        return (
          <button
            key={l}
            type="button"
            disabled={disabled}
            onClick={() => onChange(l)}
            className={cn(
              "rounded-xl border p-2.5 text-center transition-all disabled:opacity-40",
              active ? "border-primary bg-primary/5 ring-2 ring-primary/30" : "hover:bg-muted/60",
            )}
          >
            <CefrBadge level={l} />
          </button>
        );
      })}
    </div>
  );
}

function ConfirmDialog({
  trigger,
  title,
  description,
  confirmLabel,
  onConfirm,
  destructive,
}: {
  trigger: React.ReactNode;
  title: string;
  description: string;
  confirmLabel: string;
  onConfirm: () => void;
  destructive?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-2 flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant={destructive ? "destructive" : "default"} onClick={onConfirm}>
              {confirmLabel}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
