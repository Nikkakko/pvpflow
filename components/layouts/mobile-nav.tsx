"use client";
import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MainNavItem } from "@/types";
import { useSelectedLayoutSegment } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { siteConfig } from "../config/site";

interface MobileNavProps {}

const MobileNav: React.FC<MobileNavProps> = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const segment = useSelectedLayoutSegment();
  const [open, setOpen] = React.useState(false);

  if (isDesktop) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1.5 pr-0 pt-9">
        <div className="w-full px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="font-bold">{siteConfig.name}</span>
            <span className="sr-only">Home</span>
          </Link>
        </div>

        <div className="">
          {siteConfig.mainNav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center py-3"
              onClick={() => setOpen(false)}
            >
              <span className="mr-2 ">{<item.icon />}</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
