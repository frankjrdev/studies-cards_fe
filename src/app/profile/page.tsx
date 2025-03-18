import UserInfoCard from "@/components/profile/UserInfoCard";
import UserMetaCard from "@/components/profile/UserMetaCard";

export default function Profile() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white">
      <div className=" p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          {/* <UserAddressCard /> */}
        </div>
      </div>
    </div>
  );
}
