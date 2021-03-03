import React from "react";
import PageHeader from "../../components/common/PageHeader";
import SideMenu from "../../components/SideMenu";
import WalletCard from "../../components/WalletCard";
import WalletTransactions from "../../components/WalletTransactions";

interface Props {}

const Wallet: React.FC<Props> = (props) => {
  return (
    <div className="container mx-auto flex py-20">
      <div className="w-1/5">
        <SideMenu />
      </div>
      <div className="w-3/5 px-20">
        <PageHeader
          disablePadding
          title="Fund your wallet to enjoy smooth transactions of our services"
          description=""
        />
        <div className="mb-10">
          <WalletCard />
        </div>
        <WalletTransactions />
      </div>
    </div>
  );
};

export default Wallet;
