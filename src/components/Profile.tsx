import React from 'react';
import { User } from 'App';

interface ProfileProps extends User {}

const Profile = ({ id }: ProfileProps) => <h1>{`등록된 차량 번호: ${id}`}</h1>;

export default Profile;
