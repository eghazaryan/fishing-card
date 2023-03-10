import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  root: {
    width: 400,
    padding: theme.spacing.lg,
    borderRadius: theme.spacing.md,
  },

  title: {
    fontSize: 22,
    fontWeight: 500,
  },

  subTitle: {
    fontWeight: 500,
    marginTop: 20,
  },

  stats: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    margin: "5px 0",
  },

  stat: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    fontSize: 14,
    fontWeight: 450,
  },

  fishes: {
    display: "flex",
  },

  fish: {
    marginRight: 5,
  },

  rating: {
    display: "flex",
    alignItems: "center",
  },

  comments: {
    "&:after": {
      content: "''",
      display: "block",
      width: "88%",
      margin: "auto",
      borderBottom: `1px dotted ${theme.colors.gray[6]}`,
    },
  },

  indicator: {
    width: 9,
    height: 9,
  },

  button: {
    marginTop: 30,
    height: 50,
    borderRadius: theme.spacing.md,
  },
}));
