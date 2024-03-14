import Link from "next/link";
import AccountDetailsForm from "@/components/Account/AccountDetails";
import ProfileCard from "@/components/Account/ProfileCard";

const AccountPage = () => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px]">
      <section>
        <div>
          <Link href="/home">
            <div className="pt-[16px] md:hidden">
              <span>{"<"} Back</span>
            </div>
          </Link>
          <h1 className="text-center text-[40px] leading-[44px] font-medium lg:text-[54px] lg:leading-[58px] py-[40px] lg:py-[80px]">
            My Account
          </h1>
        </div>
      </section>
      <section className="pb-[80px] grid lg:grid-cols-12  grid-cols-1">
        <ProfileCard />

        <div className="lg:ml-[172px] lg:col-span-9">
          <AccountDetailsForm />
        </div>
      </section>
    </main>
  );
};

export default AccountPage;
