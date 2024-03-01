import { AlertDialog } from "@/components/ui/AlertDialog";
import { Input } from "@/components/ui/Input";
import { CUSTOM_DRACULA_THEME, JSONEditor } from "@/components/ui/JSONEditor";
import { ReactNode } from "react";
import { MdAdd, MdRocketLaunch } from "react-icons/md";

const CreateNewEnvironmentModal = (): ReactNode => (
    <AlertDialog>
        <AlertDialog.Trigger asChild>
            <button className="w-[25px] h-[25px] rounded-md bg-neon-pink text-white flex items-center justify-center pb-[2px] hover:bg-neon-pink/80">
                <MdAdd size={16} />
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
            <AlertDialog.Header>
                <AlertDialog.Title>New environments</AlertDialog.Title>
                <AlertDialog.Description>
                    Customize variables for each of your environments
                </AlertDialog.Description>
            </AlertDialog.Header>
            <Input
                placeholder="Name"
                className="border-gray-10 text-gray-100 focus:border-gray-40"
            />
            <div className="w-full h-[200px] overflow-hidden rounded-md">
                <JSONEditor
                    height="200px"
                    options={CUSTOM_DRACULA_THEME}
                    initialValue={`{\n\t"example": "value",\n}`}
                />
            </div>
            <AlertDialog.Footer>
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.Action>
                    Save
                    <MdRocketLaunch size={16} />
                </AlertDialog.Action>
            </AlertDialog.Footer>
        </AlertDialog.Content>
    </AlertDialog>
);

export { CreateNewEnvironmentModal };
