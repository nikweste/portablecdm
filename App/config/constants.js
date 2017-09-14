const redirectURI = 'http://app-login.portcdm.eu/';
const clientID = '0.1-urn:mrn:stm:service:instance:viktoria:portablecdm-app';
const baseURI = 'https://maritimeid.maritimecloud.net/auth';

/**STAGING */
const staging = {
    redirectURI: 'http://app-login.portcdm.eu/',
    clientID: '0.1-urn:mrn:stm:service:instance:viktoria:summer-app',
    baseURI: 'https://staging-maritimeid.maritimecloud.net/auth',
}

export default function constants(staging) {
    return {
        RedirectURI: staging ? staging.redirectURI : redirectURI,
        ClientID: staging ? staging.clientID : clientID,
        MaritimeAuthURI: `${baseURI}/realms/MaritimeCloud/protocol/openid-connect/auth?client_id=${clientID}&redirect_uri=${redirectURI}&response_mode=fragment&response_type=code&scope=openid`,
        MaritimeTokenURI: `${baseURI}/realms/MaritimeCloud/protocol/openid-connect/token`,
        MaritimeLogoutURI: `${baseURI}/realms/MaritimeCloud/protocol/openid-connect/logout?redirect_uri=${encodeURIComponent(redirectURI)}`,
    }
}