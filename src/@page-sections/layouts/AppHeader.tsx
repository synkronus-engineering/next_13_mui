"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

const rightLink = {
  fontSize: 10,
  color: 'common.white',
  ml: 3,
};

const AppHeader = () => {
  const router = useRouter();


  return (
    <AppBar position="fixed" color="transparent"
      sx = {{
        backgroundColor: '#fff',
        boxShadow: '0px 0px 15px 0px rgb(0 0 0 / 10%)',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters
          sx = {{minHeight: {xs: 80},}}
        >
          <Stack direction="row" spacing={2}>
            <Link href="/" > {'Home'} </Link>
            <Link href="/todos" > {'ToDos'} </Link>
            <Link href="/features" > {'New Features'} </Link>
          </Stack>
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: 'flex'}} data-testid="menu">
              <Button
                sx={{ 
                  display: 'block', 
                  pl: 2, 
                  pr: 2,
                  textTransform: 'none',
                  fontSize: '1.12rem',
                }}
              >
                  {'Sign In'}
              </Button>
          </Box>
        </Toolbar>   
      </Container>
    </AppBar>
  );
};
export default AppHeader;
