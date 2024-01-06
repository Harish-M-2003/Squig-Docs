import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu className={"md:text-4xl text-2xl"} />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-gray-900 p-0 border-0 pt-10 flex flex-col justify-between"
      >
        <div>
          <Link href={"/Installation"}>
            <SheetHeader className="p-4 hover:bg-gray-800">
              <SheetTitle className="text-white">Installation</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </Link>
          <Link href={"/documentation"}>
            <SheetHeader className="p-4 hover:bg-gray-800">
              <SheetTitle className="text-white">Documentation</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </Link>
        </div>

        <SheetFooter className="flex ml-auto mr-auto mb-5">
          <p className="text-gray-400">A Language by Harish M</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
