import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow 
                projectId='0f716da6-9bbb-4b32-be11-c39617bc42b2' 
                username={props.user.username} 
                secret={props.user.secret} 
                style={{ height: '100%' }} 
            />
        </div>
    )
}

export default ChatsPage