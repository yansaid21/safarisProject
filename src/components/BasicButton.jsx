import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" href='/'>Estoy Listo!</Button>
    </Stack>
  );
}
