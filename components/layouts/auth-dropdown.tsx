import * as React from "react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";
import CustomUserDropdown from "@/components/layouts/custom-user-dropdown";
import { ArrowRightToLine } from "lucide-react";

interface AuthDropdownProps {}

const AuthDropdown: React.FC<AuthDropdownProps> = ({}) => {
  return (
    <>
      <SignedOut>
        <Button variant="default">
          <SignInButton mode="modal" signUpForceRedirectUrl={"/"} />
          <ArrowRightToLine className="ml-2 h-4 " />
        </Button>
      </SignedOut>
      <SignedIn>
        <CustomUserDropdown />
      </SignedIn>
    </>
  );
};

export default AuthDropdown;
