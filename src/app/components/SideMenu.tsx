import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu className={"md:text-4xl text-2xl"} />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-gray-900 p-0 border-0">
        <SheetHeader className="p-4 hover:bg-gray-800">
          <SheetTitle className="text-white">Installation</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <SheetHeader className="p-4 hover:bg-gray-800">
          <SheetTitle className="text-white">Documentation</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
