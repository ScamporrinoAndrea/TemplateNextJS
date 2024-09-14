"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Avatar from "@/assets/general/avatar.jpg";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

interface UserMenuProps {
    user?: User | null
}


const UserMenu = ({ user }: UserMenuProps) => {
    const router = useRouter()

    const logout = async () => {
        const supabase = createClient()
        const { error } = await supabase.auth.signOut()
        if (error) {
            console.log("Error logging out:", error.message)
            return
        }
        router.refresh()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Image src={Avatar} alt="avatar" width={40} height={40} className="rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-error">Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default UserMenu