import React from "react";
import { useState } from "react";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";

export default function DialogOpener() {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<PhoneIphoneIcon
				onClick={handleClickOpen}
				sx={{ color: "primary.main", fontSize: 40, cursor: "pointer" }}
			/>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="phone-number"
				aria-describedby="phone-number"
			>
				<DialogTitle
					sx={{ color: "primary.main", fontSize: 40 }}
					id="alert-dialog-title"
				>
					{"+358 44 342 5088"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						You can also call, message or WhatsApp me...
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						Cool
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
