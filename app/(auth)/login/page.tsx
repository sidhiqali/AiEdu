import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="px-10 py-6">
      <div className="navbar flex items-center justify-between p-4">
        <div className="nav-left flex align-middle justify-center gap-8">
          <div className="logo p-1 bg-indigo-600 rounded-md">
            <Image
              src="/assets/logo.svg"
              alt="AiEdu Logo"
              width={32}
              height={32}
            />
          </div>
          <div className="nav-items flex items-center justify-center gap-6 text-lg font-medium">
            <div className="nav-item">Home</div>
            <div className="nav-item">Courses</div>
            <div className="nav-item">About Us</div>
            <div className="nav-item">Pricing</div>
            <div className="Contact">Contact</div>
          </div>
        </div>
        <div className="nav-right flex items-center justify-center gap-4">
          <div className="signup-button">Sign Up</div>
          <Button variant="default">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
