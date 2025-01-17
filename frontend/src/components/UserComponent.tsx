// frontend/src/components/UserComponent.tsx

import { UserType } from '@shared/types/schemas.ts';
interface Props {
    user: UserType;
}
const UserComponent: React.FC<Props> = ({ user }) => (
    <div>
        <h2>{user.displayName}</h2>
        <p>Email: {user.email}</p>
    </div>
);
export default UserComponent;