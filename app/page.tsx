"use client";

import DashboardLayout from "@/app/components/layout/DashboardLayout";
import UserProfileCard from "@/app/components/profile/UserProfileCard";
import BenefitsGrid from "@/app/components/benefits/BenefitsGrid";
import RewardsProgress from "@/app/components/rewards/RewardsProgress";
import ThemeToggle from "@/app/components/common/ThemeToggle";
import LoadingSkeleton from "@/app/components/common/LoadingSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useEffect } from "react";
import { setLoading } from "./features/theme/themeSlice";
import { setUser } from "./features/user/userSlice";

export default function Home() {
  const loading = useSelector((state: RootState) => state.theme.loading);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
      dispatch(setUser({
    name: "John Doe",
    level: 5,
    xp: 60,
    avatarUrl: "", // optional
  }));

  }, [dispatch]);
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <UserProfileCard />
            <RewardsProgress />
            <BenefitsGrid />
          </>
        )}
      </div>
    </DashboardLayout>
  );
}