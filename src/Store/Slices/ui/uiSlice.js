import { createSlice } from "@reduxjs/toolkit";
export const uiSlice = createSlice({
	name: "ui",
	initialState: {
		toggleMainMenu: false,
		toggleUserMenu: false,
		showUpdateProductModal: false,
		showDeleteModal: false,
		showInsertModal: false,
	},
	reducers: {
		setToggleMainMenu: (state /*action*/) => {
			state.toggleMainMenu = !state.toggleMainMenu;
		},
		setToggleUserMenu: (state) => {
			state.toggleUserMenu = !state.toggleUserMenu;
		},
		setShowUpdateProductModal: (state) => {
			state.showUpdateProductModal = !state.showUpdateProductModal;
		},
		setShowDeleteModal: (state) => {
			state.showDeleteModal = !state.showDeleteModal;
		},
		setShowInsertModal: (state) => {
			state.showInsertModal = !state.showInsertModal;
		},
	},
});

export const {
	setToggleMainMenu,
	setToggleUserMenu,
	setShowUpdateProductModal,
	setShowDeleteModal,
	setShowInsertModal,
} = uiSlice.actions;
