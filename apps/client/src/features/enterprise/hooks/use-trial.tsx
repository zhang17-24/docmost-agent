// 社区版：无试用期。
export const useTrial = () => {
  return { isTrial: false, trialDaysLeft: null as number | null };
};

export default useTrial;
