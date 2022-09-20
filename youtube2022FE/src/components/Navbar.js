import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    position: sticky;
    top: 0;
    backround-color: ${({theme}) => theme.bgLighter};
    height: 56px;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    padding: 0px 20px;
    position: relative;
`
const Search = styled.div`
    width: 40%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    width: 100%
`

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`
export const Navbar = () =>{
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search"></Input>
                    <SearchIcon></SearchIcon>
                </Search>
                <Button><AccountCircleIcon/>SIGN IN</Button>
            </Wrapper>
        </Container>
    )
}