"use client";

import React from "react";
import { useState } from "react";
import CpClientMarketingStrategy from "../cp-client-marketing-strategy/cp-client-marketing-strategy";
import { Tab , Tabs } from "@mui/material";

export default function CpClientDetailTabs() {
    const [tabValue, setTabValue] = useState("Users");
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <section>
            <div className="px-8">
                <Tabs
                value={tabValue}
                onChange={handleChange}
                textColor="primary"
                aria-label="custom tabs with gradient indicator"
                slotProps={{
                    indicator: {
                        sx: {
                            background: "linear-gradient(90deg, #EC3128, #F56233, #FF9B3F)",
                            height: 4,
                            borderRadius: 2,
                        },
                    },
                }}
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                }}
            >
                <Tab
                    value="Users"
                    label="Users"
                    sx={{
                        fontWeight: 500,
                        color: "#60607B",
                        textTransform: "none",
                        padding: "24px",
                        "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                    }}
                />
                <Tab
                    value="Marketing Strategy"
                    label="Marketing Strategy"
                    sx={{
                        fontWeight: 500,
                        color: "#60607B",
                        textTransform: "none",
                        padding: "24px",
                        "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                    }}
                />
                <Tab
                    value="Creatives"
                    label="Creatives"
                    sx={{
                        fontWeight: 500,
                        color: "#60607B",
                        textTransform: "none",
                        padding: "24px",
                        "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                    }}
                />
                <Tab
                    value="Influencer"
                    label="Influencer"
                    sx={{
                        fontWeight: 500,
                        color: "#60607B",
                        textTransform: "none",
                        padding: "24px",
                        "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                    }}
                />
                <Tab
                    value="Request"
                    label="Request"
                    sx={{
                        fontWeight: 500,
                        color: "#60607B",
                        textTransform: "none",
                        padding: "24px",
                        "&.Mui-selected": { color: "#0D0D11", fontWeight: 700 },
                    }}
                />
            </Tabs>
            </div>
            <div className="px-6">
                {tabValue === "Users" && (
                    <>
                        <CpClientMarketingStrategy/>
                    </>
                )}
                {tabValue === "Marketing Strategy" && (
                    <>
                        <CpClientMarketingStrategy/>
                    </>
                )}
                {tabValue === "Creatives" && (
                    <>
                        <div>Creatives</div>
                    </>
                )}
                {tabValue === "Influencer" && (
                    <>
                        <div>Influencer</div>
                    </>
                )}
                {tabValue === "Request" && (
                    <>
                        <div>Request</div>
                    </>
                )}
            </div>
        </section>
    )
}