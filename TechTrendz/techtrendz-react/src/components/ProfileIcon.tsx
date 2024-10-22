import { useSelector } from "react-redux"
import { MyFile, User } from "../types/types"
import { AuthState } from "./utils/authSlice"
import { useEffect, useState } from "react"
import { getFileLinkFromMediaId } from "./service/fileService"
import { MediaViewer } from "./MediaViewer"
import { IconAccountCircle } from "./icons/IconAccountCircle"

export const ProfileIcon = ({
    className
}: {
    className?: string
}) => {
    const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
    const user: User | null = useSelector((state: AuthState) => state.auth ? state.auth.user : null)
    const [mediaFile, setMediaFile] = useState<MyFile | null>(null)

    useEffect(() => {
        if (user?.profilePic) {
            setMediaFile({ id: user?.profilePic.id, token: token!, type: user?.profilePic.fileType, url: getFileLinkFromMediaId(user?.profilePic.id) })
        }
    }, [token, user])
    return (
        <div className={`h-full aspect-square rounded-full overflow-hidden border ${className}`}>
            {mediaFile ?
                <MediaViewer
                    key={`profile-pic-circle`}
                    value={mediaFile}
                    id={`profile-pic-circle`}
                    className={`w-full h-full`}
                />
                :
                <IconAccountCircle className="w-full h-full" />
            }
        </div>
    )
}