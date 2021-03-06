import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as classNames from "classnames";
import * as React from "react";

const styles = (theme: Theme) =>
  createStyles({
    children: theme.mixins.gutters({}),
    constantHeight: {
      height: 48
    },
    hr: {
      backgroundColor: "#eaeaea",
      border: "none",
      height: 1,
      marginBottom: 0,
      marginTop: 0
    },
    root: theme.mixins.gutters({
      alignItems: "center",
      display: "flex",
      minHeight: theme.spacing.unit * 6,
      paddingBottom: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 2
    }),
    title: {
      flex: 1,
      fontSize: "1rem",
      fontWeight: 600 as 600,
      lineHeight: 1
    },
    toolbar: {
      marginRight: -theme.spacing.unit * 2
    }
  });

interface CardTitleProps extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  className?: string;
  height?: "default" | "const";
  title: string | React.ReactNode;
  toolbar?: React.ReactNode;
  onClick?: (event: React.MouseEvent<any>) => void;
}

const CardTitle = withStyles(styles, { name: "CardTitle" })(
  ({
    classes,
    className,
    children,
    height,
    title,
    toolbar,
    onClick,
    ...props
  }: CardTitleProps) => (
    <>
      <div
        className={classNames(classes.root, {
          [className]: !!className,
          [classes.constantHeight]: height === "const"
        })}
        {...props}
      >
        <Typography
          className={classes.title}
          variant="body1"
          onClick={onClick}
          component="span"
        >
          {title}
        </Typography>
        <div className={classes.toolbar}>{toolbar}</div>
      </div>
      <div className={classes.children}>{children}</div>
      <hr className={classes.hr} />
    </>
  )
);
CardTitle.displayName = "CardTitle";
export default CardTitle;
