import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LamaTube from "../img/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExploreIcon from '@mui/icons-material/Explore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ReplayIcon from '@mui/icons-material/Replay';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) => theme.bg};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
`;
const Wrapper = styled.div`
    padding: 18px 26px
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px
`;
const Img = styled.img`
    height: 25px
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
`;
const Hr = styled.hr`
    margin: 15px 0px;
    border: 1px solid ${({theme}) => theme.soft}
`

const Login = styled.div`

`
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px
`
export const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={LamaTube}/>
                    DuyTube
                </Logo>
                <Item>
                    <HomeIcon/>
                    Trang chủ
                </Item>
                <Item>
                    <ExploreIcon/>
                    Khám phá
                </Item>
                <Item>
                    <OndemandVideoIcon/>
                    Kênh
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryIcon/>
                    Thư viện
                </Item>
                <Item>
                    <ReplayIcon/>
                    Đã xem
                </Item>
                <Hr/>
                <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Button><AccountCircleIcon/>SIGN IN</Button>
                </Login>
                <Hr/>
                <Item>
                    <SlideshowIcon/>
                    Video của bạn
                </Item>
                <Item>
                    <AccessTimeIcon/>
                    Xem sau
                </Item>
                <Item>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Xem thêm</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                </Item>
            </Wrapper>
        </Container>
    )
}