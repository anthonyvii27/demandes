import { AlertDialog } from "@/components/ui/AlertDialog";
import { Input } from "@/components/ui/Input";
import { JSONEditor } from "@/components/ui/JSONEditor";
import { tags as t } from "@lezer/highlight";
import { ReactNode } from "react";
import { MdEdit, MdRocketLaunch } from "react-icons/md";

type Props = {
    name: string;
    envs: string;
};

const UpdateEnvironmentModal = ({ name, envs }: Props): ReactNode => (
    <AlertDialog>
        <AlertDialog.Trigger asChild>
            <button className="w-[25px] h-[25px] rounded-md bg-neon-pink text-white flex items-center justify-center pb-[2px] hover:bg-neon-pink/80">
                <MdEdit size={12} />
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
            <AlertDialog.Header>
                <AlertDialog.Title>Update your environment</AlertDialog.Title>
                <AlertDialog.Description>
                    Customize variables for each of your environments
                </AlertDialog.Description>
            </AlertDialog.Header>
            <Input
                placeholder="Name"
                defaultValue={name}
                className="border-gray-10 text-gray-100 focus:border-gray-40"
            />
            <div className="w-full h-[200px] overflow-hidden rounded-md">
                <JSONEditor
                    height="200px"
                    options={{
                        settings: {
                            background: "#1A1D1E",
                            gutterBackground: "#151718",
                            gutterForeground: "#9BA1A6",
                            lineHighlight: "rgba(238, 9, 121, 0.3)",
                            caret: "#FFF",
                        },
                        styles: [
                            { tag: t.string, color: "#EE0979" },
                            { tag: [t.function(t.propertyName), t.propertyName], color: "#FFF" },
                            { tag: [t.keyword, t.operator, t.tagName], color: "#EE0979" },
                        ],
                    }}
                    initialValue={envs}
                />
            </div>
            <AlertDialog.Footer>
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.Action>
                    Update
                    <MdRocketLaunch size={16} />
                </AlertDialog.Action>
            </AlertDialog.Footer>
        </AlertDialog.Content>
    </AlertDialog>
);

export { UpdateEnvironmentModal };
