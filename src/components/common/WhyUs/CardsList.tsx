import Dish01Icon from "@/components/icons/dish";
import SignIcon from "../motion/Sign";
import PackageOpenIcon from "@/components/icons/PackageOpen";
import AccountSetting03Icon from "@/components/icons/AccountSetting";
import Building03Icon from "@/components/icons/Buildings";
import UserGroup02Icon from "@/components/icons/UserGroup";

export const cardList = [
  {
    icon: <Dish01Icon />,
    text: (
      <p>
        a{" "}
        <span className="relative">
          <SignIcon
            idx={0}
            className="absolute inset-0 -left-1 -top-1 opacity-80"
            width="70"
            height="36"
          />
          unique
        </span>{" "}
        experience of taste and aroma caviar
      </p>
    ),
  },
  {
    icon: <PackageOpenIcon />,
    text: (
      <p>
        Accurate processes and{" "}
        <span className="relative">
          <SignIcon
            idx={1}
            className="absolute inset-0 -left-2 opacity-80"
            width="55"
            height="27"
          />
          high
        </span>{" "}
        standards of maintenance that ensure fresh and quality products reach
        the customer
      </p>
    ),
  },
  {
    icon: <AccountSetting03Icon />,
    text: (
      <p>
        <span className="relative">
          <SignIcon
            idx={2}
            className="absolute inset-0 -left-1 -top-1 opacity-80"
            width="60"
            height="34"
          />
          Great
        </span>{" "}
        relationship with Middle east and Europe countries
      </p>
    ),
  },
  {
    icon: <Building03Icon />,
    text: (
      <p>
        <span className="relative">
          <SignIcon
            idx={3}
            className="absolute inset-0 -left-2 -top-1 opacity-80"
            width="72"
            height="42"
          />
          Private
        </span>{" "}
        label,Bulk supplying solution
      </p>
    ),
  },
  {
    icon: <UserGroup02Icon />,
    text: (
      <p>
        Customer service available <br />
        <span className="relative">
          <SignIcon
            idx={4}
            className="absolute inset-0 -left-1 -top-1 opacity-80"
            width="48"
            height="34"
          />
          24/7
        </span>{" "}
        for you
      </p>
    ),
  },
];
