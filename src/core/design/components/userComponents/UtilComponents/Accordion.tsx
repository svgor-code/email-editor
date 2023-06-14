import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MuiAccordion, { AccordionProps } from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

// @ts-ignore
export const Accordion: React.FC<AccordionProps> = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        "&$expanded": {
            margin: "auto"
        }
    },
    expanded: {}
})(MuiAccordion);
// @ts-ignore
export const AccordionSummary: any = withStyles({
    root: {
        backgroundColor: "#fafafa",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56
        }
    },
    content: {
        "&$expanded": {
            margin: "12px 0"
        }
    },
    expanded: {}
})(MuiAccordionSummary);
// @ts-ignore
export const AccordionDetails: any = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiAccordionDetails);

export function CustomAccordion({ title, preview, children, defaultExpanded }: any) {
    return (
        <Accordion defaultExpanded={defaultExpanded ? true : false}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box display="flex" width="100%">
                    <Typography variant="h5">{title}</Typography>
                    <Box flexGrow={1} />
                    {preview}
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box width="100%">{children}</Box>
            </AccordionDetails>
        </Accordion>
    );
}
