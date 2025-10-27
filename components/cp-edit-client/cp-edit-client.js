"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Box, Modal, Stack } from "@mui/material";
import SelectPrimary from "../cp-select-primary/CpSelectPrimary";
import CustomTextField from "../cp-custom-textfield/CpCustomTextField";
import BasicDatePicker from "../cp-custom-calander/CpCustomCalander";
import CheckboxLabels from "../checkbox/Checkbox";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 850,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    maxHeight: "90vh",
    overflowY: "auto",
};

export default function EditClient({ open, handleClose }) {
    const [formData, setFormData] = useState({
        clientName: "",
        useCount: "",
        startDate: null,
        endDate: null,
        currency: "",
        keyKpi: "",
        description: "",
    });

    // ✅ Manage multiple brand groups
    const [brandGroups, setBrandGroups] = useState([
        {
            brand: "",
            subBrands: [{ subBrand: "", productTypes: [], newProductType: "" }],
        },
    ]);


    const dropdownOptions = {
        subBrands: [
            { value: "brand1", label: "Brand 1" },
            { value: "brand2", label: "Brand 2" },
        ],
        useCounts: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
        ],
        keyKpis: [
            { value: "kpi 1", label: "Kpi 1" },
            { value: "kpi 2", label: "Kpi 2" },
        ],
        currency: [
            { value: "rupee", label: "Rupee" },
            { value: "dollar", label: "Dollar" },
        ],
    };
    const handleAddProductType = (brandIndex, subIndex) => {
        const updated = [...brandGroups];
        const value = updated[brandIndex].subBrands[subIndex].newProductType?.trim();
        if (value) {
            if (!updated[brandIndex].subBrands[subIndex].productTypes)
                updated[brandIndex].subBrands[subIndex].productTypes = [];
            updated[brandIndex].subBrands[subIndex].productTypes.push(value);
            updated[brandIndex].subBrands[subIndex].newProductType = "";
            setBrandGroups(updated);
        }
    };
    const handleRemoveProductType = (brandIndex, subIndex, typeIndex) => {
        const updated = [...brandGroups];
        updated[brandIndex].subBrands[subIndex].productTypes.splice(typeIndex, 1);
        setBrandGroups(updated);
    };
    // === Handlers ===
    const handleChange = (field) => (event) => {
        const value = event?.target?.value ?? event;
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleBrandChange = (index, field, value) => {
        const updated = [...brandGroups];
        updated[index][field] = value;
        setBrandGroups(updated);
    };

    const handleSubBrandChange = (brandIndex, subIndex, field, value) => {
        const updated = [...brandGroups];
        updated[brandIndex].subBrands[subIndex][field] = value;
        setBrandGroups(updated);
    };

    const handleAddSubBrand = (brandIndex) => {
        const updated = [...brandGroups];
        updated[brandIndex].subBrands.push({ subBrand: "", productType: "" });
        setBrandGroups(updated);
    };

    const handleDeleteSubBrand = (brandIndex, subIndex) => {
        const updated = [...brandGroups];
        updated[brandIndex].subBrands = updated[brandIndex].subBrands.filter(
            (_, i) => i !== subIndex
        );
        setBrandGroups(updated);
    };

    const handleAddBrandGroup = () => {
        setBrandGroups([
            ...brandGroups,
            { brand: "", subBrands: [{ subBrand: "", productType: "" }] },
        ]);
    };

    const handleDeleteBrandGroup = (brandIndex) => {
        setBrandGroups(brandGroups.filter((_, i) => i !== brandIndex));
    };

    const handleSubmit = () => {
        const payload = { ...formData, brandGroups };
        console.log("Submitting client:", payload);
        handleClose();
    };

    // === Render ===
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="sec-title">Edit Client</div>
                    <button onClick={handleClose}>
                        <Image
                            src="/assets/images/close.png"
                            alt="Icon"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>

                {/* Client Details */}
                <Stack direction="row" spacing={2} mb={2}>
                    <div className="flex flex-col">
                        <div className="mb-2">
                            Client Name <span className="text-red-500">*</span>
                        </div>
                        <CustomTextField
                            placeholder="Enter client name"
                            value={formData.clientName}
                            onChange={handleChange("clientName")}
                            sx={{ minWidth: 380 }}
                        />
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-2">
                            Brand/Sub Brand <span className="text-red-500">*</span>
                        </div>
                        <SelectPrimary
                            placeholder="Sub Brand"
                            label="Sub Brand"
                            value={formData.subBrand}
                            onChange={handleChange("subBrand")}
                            items={dropdownOptions.subBrands}
                            minWidth={380}
                            maxWidth={400}
                        />
                    </div>
                </Stack>

                {/* Modules + User Count */}
                <Stack direction="row" spacing={2} mb={2}>
                    <div className="flex flex-col">
                        <div className="mb-2">
                            Modules Enrolled <span className="text-red-500">*</span>
                        </div>
                        <div className="flex gap-2 flex-row">
                            <CheckboxLabels label="Marketing Strategy" labelSize={12} />
                            <CheckboxLabels label="Creatives" labelSize={12} />
                            <CheckboxLabels label="Influencers" labelSize={12} />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-2">
                            User Count <span className="text-red-500">*</span>
                        </div>
                        <SelectPrimary
                            label="1"
                            value={formData.useCount}
                            onChange={handleChange("useCount")}
                            items={dropdownOptions.useCounts}
                            minWidth={380}
                            maxWidth={400}
                        />
                    </div>
                </Stack>

                {/* Dates */}
                <Stack direction="row" spacing={2} mb={2}>
                    <div className="flex flex-col">
                        <div className="mb-2">Start Date</div>
                        <BasicDatePicker />
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2">End Date</div>
                        <BasicDatePicker />
                    </div>
                </Stack>

                {/* Currency + KPI */}
                <Stack direction="row" spacing={2} mb={2}>
                    <div className="flex flex-col">
                        <div className="mb-2">
                            Currency <span className="text-red-500">*</span>
                        </div>
                        <SelectPrimary
                            label="Select Currency"
                            value={formData.currency}
                            onChange={handleChange("currency")}
                            items={dropdownOptions.currency}
                            minWidth={380}
                            maxWidth={400}
                        />
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-2">
                            Key KPI <span className="text-red-500">*</span>
                        </div>
                        <SelectPrimary
                            label="Client Type"
                            value={formData.keyKpi}
                            onChange={handleChange("keyKpi")}
                            items={dropdownOptions.keyKpis}
                            minWidth={380}
                            maxWidth={400}
                        />
                    </div>
                </Stack>

                {/* === Dynamic Brand Sections === */}
                {brandGroups.map((brandGroup, brandIndex) => (
                    <Stack
                        key={brandIndex}
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                        className="mb-6"
                    >
                        {/* Brand Field */}
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <label>
                                    Brand <span className="text-red-500">*</span>
                                </label>
                                <button
                                    className="text-gray-600"
                                    onClick={() => handleDeleteBrandGroup(brandIndex)}
                                >
                                    <Image
                                        src="/assets/icons/bin.svg"
                                        alt="delete"
                                        width={15}
                                        height={15}
                                    />
                                </button>
                            </div>
                            <CustomTextField
                                placeholder="XYZ"
                                value={brandGroup.brand}
                                onChange={(e) =>
                                    handleBrandChange(brandIndex, "brand", e.target.value)
                                }
                                sx={{ minWidth: 230 }}
                            />
                        </div>

                        {/* Sub Brands + Product Types */}
                        <div className="flex flex-col gap-4">
                            {brandGroup.subBrands.map((item, subIndex) => (
                                <div
                                    key={subIndex}
                                    className="flex flex-row items-start gap-4"
                                >
                                    {/* Sub Brand */}
                                    <div className="flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <label>
                                                Sub Brand <span className="text-red-500">*</span>
                                            </label>
                                            {subIndex === brandGroup.subBrands.length - 1 && (
                                                <button
                                                    onClick={() => handleAddSubBrand(brandIndex)}
                                                    className="text-[#022B59] font-semibold border-b border-[#022B59]"
                                                >
                                                    + ADD
                                                </button>
                                            )}
                                        </div>
                                        <CustomTextField
                                            placeholder="XYZ"
                                            value={item.subBrand}
                                            onChange={(e) =>
                                                handleSubBrandChange(
                                                    brandIndex,
                                                    subIndex,
                                                    "subBrand",
                                                    e.target.value
                                                )
                                            }
                                            sx={{ minWidth: 230 }}
                                        />
                                    </div>

                                    {/* Product Type */}
                                    <div className="flex flex-col">
                                        <label className="mb-2">
                                            Product type <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center">
                                            <CustomTextField
                                                placeholder="Enter product type"
                                                value={item.newProductType || ""}
                                                onChange={(e) =>
                                                    handleSubBrandChange(
                                                        brandIndex,
                                                        subIndex,
                                                        "newProductType",
                                                        e.target.value
                                                    )
                                                }
                                                sx={{ minWidth: 230 }}
                                            />
                                            <button
                                                className="relative -left-5"
                                                onClick={() => handleAddProductType(brandIndex, subIndex)}
                                            >
                                                <Image
                                                    src="/assets/icons/plus.svg"
                                                    alt="add"
                                                    width={15}
                                                    height={15}
                                                />
                                            </button>
                                        </div>

                                        {/* Chips Display */}
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {item.productTypes?.map((type, typeIndex) => (
                                                <div
                                                    key={typeIndex}
                                                    className="flex items-center bg-gray-100 text-sm px-2 py-1 rounded-md"
                                                >
                                                    <span>{type}</span>
                                                    <button
                                                        className="ml-2 text-gray-500 hover:text-black"
                                                        onClick={() =>
                                                            handleRemoveProductType(brandIndex, subIndex, typeIndex)
                                                        }
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Delete Sub Brand */}
                                    <div className="flex flex-col justify-end">
                                        <button
                                            className="mt-10"
                                            onClick={() =>
                                                handleDeleteSubBrand(brandIndex, subIndex)
                                            }
                                        >
                                            <Image
                                                src="/assets/icons/delete.svg"
                                                alt="delete"
                                                width={15}
                                                height={15}
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Stack>
                ))}

                {/* Add New Brand Button */}
                <button
                    onClick={handleAddBrandGroup}
                    className="self-start text-[#022B59] font-semibold border-b border-[#022B59] mt-2 mb-8"
                >
                    + Add New Brand
                </button>

                {/* Description */}
                <div className="mb-2">Add Description</div>
                <CustomTextField
                    fullWidth
                    multiline
                    minRows={3}
                    placeholder="Text input"
                    value={formData.description}
                    onChange={handleChange("description")}
                    InputProps={{ sx: { borderRadius: "8px" } }}
                />

                {/* Footer Buttons */}
                <Stack direction="row" justifyContent="flex-end" spacing={2} mt={4}>
                    <button className="btn-outline" onClick={handleClose}>
                        Cancel
                    </button>
                    <button
                        className="btn-dark rounded-xl py-3 px-4"
                        onClick={handleSubmit}
                    >
                        Add Client
                    </button>
                </Stack>
            </Box>
        </Modal>
    );
}
