const routes = [{
        path: "/login",
        component: () =>
            import ("../pages/LoginPage.vue"),
    },

    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/sign-in",
        component: () =>
            import ("../pages/SignIn.vue"),
    },
    {
        path: "/main",
        component: () =>
            import ("pages/IndexPage.vue"),
    },
    {
        path: "/client-form",
        component: () =>
            import ("../pages/ClientForm.vue"),
    },
    {
        path: "/trainer-form",
        component: () =>
            import ("../pages/TrainerForm.vue"),
    },
    {
        path: "/trainer-full-form",
        component: () =>
            import ("../pages/TrainerFullForm.vue"),
    },
    {
        path: "/main-information",
        component: () =>
            import ("../pages/MainInformation.vue"),
    },
    {
        path: "/put-targets",
        component: () =>
            import ("../pages/PutTargets.vue"),
    },
    {
        path: "/limitation",
        component: () =>
            import ("../pages/LimitationForm.vue"),
    },
    {
        path: "/before-result",
        component: () =>
            import ("../pages/BeforeResult.vue"),
    },
    {
        path: "/diet",
        name: "DietPage",
        component: () =>
            import ("../pages/Diet/DietPage.vue"),
    },
    {
        name: "CalorieCalculator",
        path: "/calorie-calculator",
        component: () =>
            import ("pages/Diet/CalorieCalculator.vue"),
    },
    {
        name: "WaterCalculator",
        path: "/water-calculator", // Corrected path
        component: () =>
            import ("pages/Diet/WaterCalculator.vue"),
    },
    {
        name: "BmiCalculator",
        path: "/bmi-calculator", // Corrected path
        component: () =>
            import ("pages/Diet/BmiCalculator.vue"),
    },
    {
        path: "/trainers",
        name: "TrainersPage",
        component: () =>
            import ("../pages/TrainersPage.vue"),
    },
    {
        path: "/new-training",
        name: "NewTraningPage",
        component: () =>
            import ("../pages/NewTrainnig.vue"),
    },
    {
        path: "/trainings",
        name: "TraningsPage",
        component: () =>
            import ("../pages/TrainingsPage.vue"),
    },
    {
        path: "/profile",
        component: () =>
            import ("../pages/ProfilePage.vue"),
    },
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("../pages/ErrorNotFound.vue"),
    },
];

export default routes;
