import React from "react";
import { ISpace } from "@/features/space/types/space.types.ts";

type SpaceSecuritySettingsProps = {
  space: ISpace;
  readOnly?: boolean;
};

// 社区版：空间级安全设置（公开分享、访客评论）为企业版功能，此处留空。
export default function SpaceSecuritySettings({
  readOnly,
}: SpaceSecuritySettingsProps) {
  if (readOnly) return null;
  return null;
}
