import { AlertDialog } from "@/components/ui/AlertDialog";
import { Switch } from "@/components/ui/Switch";
import { Tooltip } from "@/components/ui/Tooltip";
import { ReactNode } from "react";
import { MdInfo, MdSettings } from "react-icons/md";

const SettingsModal = (): ReactNode => (
    <AlertDialog>
        <AlertDialog.Trigger>
            <button className="w-[25px] h-[25px] rounded-md bg-transparent text-white flex items-center justify-center pb-[2px] hover:bg-neon-pink/80">
                <MdSettings size={18} color="#FFF" />
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Content className="w-[400px]">
            <AlertDialog.Header>
                <AlertDialog.Title>Settings</AlertDialog.Title>
                <AlertDialog.Description>Lorem Ipsum solor dolor</AlertDialog.Description>
            </AlertDialog.Header>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <Tooltip>
                        <Tooltip.Trigger asChild>
                            <span className="font-medium text-gray-90 text-sm flex items-center gap-1">
                                Show Hotkeys
                                <MdInfo size={13} className="text-gray-40" />
                            </span>
                        </Tooltip.Trigger>
                        <Tooltip.Content>
                            <p>Showing hotkeys (such as [⌘+K] and [⌘+P]) next to an element</p>
                        </Tooltip.Content>
                    </Tooltip>
                    <Switch />
                </div>
            </div>
            <AlertDialog.Footer>
                <AlertDialog.Action>Close</AlertDialog.Action>
            </AlertDialog.Footer>
        </AlertDialog.Content>
    </AlertDialog>
);

export { SettingsModal };
