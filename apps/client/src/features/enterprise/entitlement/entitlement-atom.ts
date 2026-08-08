import { atom } from "jotai";

// 社区版：始终为空的企业特性授权状态。
export const entitlementAtom = atom<{ features: string[] }>({ features: [] });
