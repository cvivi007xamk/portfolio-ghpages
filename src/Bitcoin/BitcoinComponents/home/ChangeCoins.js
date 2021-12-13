import React from "react";
import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: "primary.main",
	},
	// "& .MuiInput-underline:after": {
	// 	borderBottomColor: "primary.main",
	// },
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "secondary.contrastText",
		},
		"&:hover fieldset": {
			borderColor: "#AFFBE9",
		},
		"&.Mui-focused fieldset": {
			borderColor: "primary.main",
		},
	},
});

const deAccent = (string) => {
	return string
		.split("")
		.map(
			function (letter) {
				let i = this.accents.indexOf(letter);
				return i !== -1 ? this.out[i] : letter;
			}.bind({
				accents:
					"ÀÁÂÃÄÅĄàáâãäåąßÒÓÔÕÕÖØÓòóôõöøóÈÉÊËĘèéêëęðÇĆçćÐÌÍÎÏìíîïÙÚÛÜùúûüÑŃñńŠŚšśŸÿýŽŻŹžżź",
				out: "AAAAAAAaaaaaaaBOOOOOOOOoooooooEEEEEeeeeeeCCccDIIIIiiiiUUUUuuuuNNnnSSssYyyZZZzzz",
			})
		)
		.join("");
};

const ChangeCoins = (props) => {
	return (
		<Box>
			<CssTextField
				sx={{ marginTop: "20px", marginBottom: "20px" }}
				label="Coin name:"
				id="coin"
				onChange={(event) => {
					props.setCoin(
						deAccent(event.target.value)
							.replace(/\s+/g, "-")
							.toLowerCase()
					);
				}}
			/>
		</Box>
	);
};

export default ChangeCoins;
