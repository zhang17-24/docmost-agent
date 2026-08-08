import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
import { workspaceAtom } from "@/features/user/atoms/current-user-atom.ts";
import classes from "./home-ai-prompt.module.css";

// 社区版：移除 AI 问答输入框，保留欢迎标题。
export default function HomeAiPrompt() {
  const { t } = useTranslation();
  const workspace = useAtomValue(workspaceAtom);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>
        {t("Welcome to {{name}}", { name: workspace?.name ?? "Docmost" })}
      </h1>
      <div className={classes.subtitle}>
        {t("Create and organize your workspace")}
      </div>
    </div>
  );
}
