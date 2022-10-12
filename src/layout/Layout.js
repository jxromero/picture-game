import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Layout() {
    const Main = styled.main`
        background-image: url('img/cartoon-bg.jpg');
        background-size: cover;
        height: 100vh;
    `;
    
    const ContentLayout = styled.div`
        padding 50px;
        height: calc(100vh - 100px);
        
    `;

    const Heading = styled.h1`
        font-size: 55px;
        margin-bottom: 20px;
        text-align: center;
        text-shadow: 
            -2px -2px 0 #fff,
            0   -2px 0 #fff,
            2px -2px 0 #fff,
            2px  0   0 #fff,
            2px  2px 0 #fff,
            0    2px 0 #fff,
            -2px  2px 0 #fff,
            -2px  0   0 #fff;
    `;
    return (
        <Main>
            <ContentLayout>
                <Heading>4 Pic, 1 Answer!</Heading>
                <Outlet />
            </ContentLayout>
        </Main>
    )
}

export default Layout;