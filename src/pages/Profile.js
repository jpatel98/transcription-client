import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, given_name, family_name, email_verified, updated_at } = user;
  const profileData = {
    "given_name": given_name,
    "family_name": family_name,
    "email": email,
    "email_verified": email_verified,
    "last_updated": updated_at,
    "picture": picture
  }
  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
            <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(profileData, null, 2)}
            </pre>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});