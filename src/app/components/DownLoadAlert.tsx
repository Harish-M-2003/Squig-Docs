import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function DownloadAlert() {

  const buttonStyle = "hover:scale-110 active:scale-100 items-center cursor-pointer bg-gradient-to-tr from-blue-400 to-blue-700 text-white m-2 p-4 px-6 md:px-10 rounded-xl";
  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonStyle}>
        {/* <button onClick={(e)=>{
                              setDownloades(downloade + 1)
                              handleDownloadForWindows(e)
                              }}
                href='#'
              disabled
              className=
            >
              {(!isPending)?"Download":"Downloading"}
              Download
            </button> */}
        Download
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-gray-900 border-0">
        <AlertDialogHeader>
          <AlertDialogTitle>Windows Support Only</AlertDialogTitle>
          <AlertDialogDescription>
            Squig Support for Windows Only Thank you for using Squig! Currently,
            Squig is optimized for Windows operating systems. We are actively
            working to expand compatibility to other platforms. Stay tuned for
            updates and improvements. For Windows users, enjoy coding with
            Squig!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-5">
          <AlertDialogCancel className="text-black border-0 bg-white">Cancel</AlertDialogCancel>
          <AlertDialogAction className={"active:scale-100 items-center cursor-pointer bg-gradient-to-tr from-blue-400 to-blue-700 text-white p-4 px-6 md:px-10 rounded-lg"}>Okay</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
