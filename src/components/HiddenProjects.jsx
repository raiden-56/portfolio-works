import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Snackbar,
  Typography,
} from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import Illustration from '../illustrations/Illustration';
import {
  selectHiddenIds,
  selectHiddenProjects,
  selectProjects,
  setHiddenDialogOpen,
  unhideAll,
  unhideProject,
} from '../store/worksSlice';

/** Dialog listing hidden projects, each with an Unhide button. */
export function HiddenProjectsDialog() {
  const dispatch = useDispatch();
  const open = useSelector((s) => s.works.hiddenDialogOpen);
  const hidden = useSelector(selectHiddenProjects);
  const close = () => dispatch(setHiddenDialogOpen(false));

  return (
    <Dialog open={open} onClose={close} maxWidth="xs" fullWidth slotProps={{ paper: { sx: { borderRadius: '12px' } } }}>
      <DialogTitle sx={{ pb: 0.5 }}>Hidden projects</DialogTitle>
      <DialogContent sx={{ px: 1.5 }}>
        <Typography variant="body2" color="text.secondary" sx={{ px: 1.5, mb: 1 }}>
          Hidden works don&apos;t appear on the dashboard or in its stats. Your choice is saved in this browser.
        </Typography>
        {hidden.length === 0 ? (
          <Box sx={{ py: 5, textAlign: 'center', color: 'text.secondary' }}>
            <Typography variant="body2">Nothing hidden. Use the hide icon on any card to hide it.</Typography>
          </Box>
        ) : (
          <List dense>
            {hidden.map((p) => (
              <ListItem
                key={p.id}
                secondaryAction={
                  <Button size="small" startIcon={<VisibilityRoundedIcon />} onClick={() => dispatch(unhideProject(p.id))}>
                    Unhide
                  </Button>
                }
              >
                <ListItemAvatar>
                  <Box sx={{ width: 56, height: 40, mr: 1.5, borderRadius: '6px', overflow: 'hidden' }}>
                    <Illustration project={p} animate={false} />
                  </Box>
                </ListItemAvatar>
                <ListItemText primary={p.title} secondary={p.category} />
              </ListItem>
            ))}
          </List>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        {hidden.length > 0 && (
          <Button color="inherit" onClick={() => dispatch(unhideAll())}>
            Unhide all
          </Button>
        )}
        <Button variant="contained" onClick={close}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

/** "Project hidden — Undo" toast whenever something gets hidden. */
export function HideUndoSnackbar() {
  const dispatch = useDispatch();
  const hiddenIds = useSelector(selectHiddenIds);
  const projects = useSelector(selectProjects);
  const prev = useRef(hiddenIds);
  const [lastId, setLastId] = useState(null);

  useEffect(() => {
    const added = hiddenIds.find((id) => !prev.current.includes(id));
    prev.current = hiddenIds;
    if (added) setLastId(added);
  }, [hiddenIds]);

  const title = projects.find((p) => p.id === lastId)?.title;

  return (
    <Snackbar
      open={Boolean(lastId)}
      autoHideDuration={5000}
      onClose={(_, reason) => reason !== 'clickaway' && setLastId(null)}
      message={`“${title}” hidden`}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      action={
        <Button
          color="secondary"
          size="small"
          onClick={() => {
            dispatch(unhideProject(lastId));
            setLastId(null);
          }}
        >
          Undo
        </Button>
      }
    />
  );
}
