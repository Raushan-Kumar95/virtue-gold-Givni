


export const Menu =

    [
        // title = "Menu",
        {
            name: "Dashboard",
            icon: "fa fa-home",
            path: "/"
        }


    ]





    export const NavMainData = [
    
    { 
        "title": "Profile", 
        "icon": "person", 
        "path": "/profile", },
    {
        "title": "Payments", 
        "icon": "payment",
        "children": [
            { "title": "Payment Dashboard", "path": "/payments/dashboard" },
            { "title": "Payment History", "path": "/payments/history" },
            { "title": "Payment Gateway", "path": "/payments/gateway" }
        ]
    },
    {
        "title": "Orders",
        "icon": "shopping_cart",
        "children": [
            {
                "title": "Order Notification",
                "path": "/orders/notification"
            }
        ]
    },
    {
        "title": "Clients",
        "icon": "group",
        "children": [
            {
                "title": "Client List",
                "path": "/clients/list"
            }
        ]
    },
    {
        "title": "Coin System",
        "icon": "monetization_on",
        "children": [
            {
                "title": "HDC Coin",
                "path": "/coin/hdc"
            },
            {
                "title": "Gold Coin",
                "path": "/coin/gold"
            }
        ]
    },
    {
        "title": "Commission",
        "icon": "attach_money",
        "children": [
            {
                "title": "Commission System",
                "path": "/commission/system"
            }
        ]
    },
    {
        "title": "Wallet",
        "icon": "account_balance_wallet",
        "children": [
            {
                "title": "Wallet Management",
                "path": "/wallet/management"
            }
        ]
    },
    {
        "title": "Bills",
        "icon": "receipt",
        "children": [
            {
                "title": "Dynamic Bill",
                "path": "/bills/dynamic"
            }
        ]
    },
    {
        "title": "Designation",
        "icon": "work",
        "children": [
            {
                "title": "Designation Post",
                "path": "/designation/post"
            }
        ]
    },
    {
        "title": "Promotion",
        "icon": "trending_up",
        "children": [
            {
                "title": "Promotion Target",
                "path": "/promotion/target"
            }
        ]
    },
    {
        "title": "Search",
        "icon": "search",
        "children": [
            {
                "title": "Search Product",
                "path": "/search/product"
            }

        ]
    }
    ]