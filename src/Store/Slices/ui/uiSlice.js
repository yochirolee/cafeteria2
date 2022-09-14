import { createSlice } from "@reduxjs/toolkit";
export const uiSlice = createSlice({
	name: "ui",
	initialState: {
		toggleMainMenu: false,
		toggleUserMenu: false,
		showNewProductModal: false,
		showDeleteModal: false,
	},
	reducers: {
		setToggleMainMenu: (state /*action*/) => {
			state.toggleMainMenu = !state.toggleMainMenu;
		},
		setToggleUserMenu: (state) => {
			state.toggleUserMenu = !state.toggleUserMenu;
		},
		setShowNewProductModal: (state) => {
			state.showNewProductModal = !state.showNewProductModal;
		},
		setShowDeleteModal: (state) => {
			state.showDeleteModal = !state.showDeleteModal;
		},
	},
});

export const {
	toggleMainMenu,
	toggleUserMenu,
	showNewProductModal,
	setToggleMainMenu,
	setToggleUserMenu,
	setShowNewProductModal,
	setShowDeleteModal,
} = uiSlice.actions;
