// 社区版：返回空的特性授权，所有企业特性关闭。
export function useEntitlements() {
  return { data: { features: [] as string[] } };
}
