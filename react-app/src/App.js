import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import './App.css';

import Layout from './components/Layout';
import words from './words';
import PrivateRoute from './components/PrivateRoute';

import TopPage from "./pages/EndUser/TopPage";
import FeaturePage from './pages/EndUser/FeaturePage';
import ProfilePage from './pages/EndUser/ProfilePage';
import ServicePage from './pages/EndUser/ServicePage';
import BlogPage from './pages/EndUser/BlogPage';
import ContactPage from './pages/EndUser/ContactPage';
import ReviewPage from './pages/EndUser/ReviewPage';
import FAQPage from './pages/EndUser/FAQPage';
import TermOfUsePage from './pages/EndUser/TermOfUsePage';
import PolicyPage from './pages/EndUser/PolicyPage';
import PurposePage from './pages/EndUser/PurposePage';
import BlogContentPage from './pages/EndUser/BlogContentPage';

import AdminLogin from './pages/Admin/AdminLogin';
import AdminHome from './pages/Admin/AdminHome';
import LettersPage from "./pages/Admin/LettersPage";
import SubscribersPage from "./pages/Admin/SubscribersPage";

import BlogManagePage from "./pages/Admin/BlogManagePage";
import CreatePost from './pages/Admin/CreatePost';
import EditPost from './pages/Admin/EditPost';

import ReviewManagePage from './pages/Admin/ReviewManagePage';
import CreateReview from './pages/Admin/CreateReview';
import EditReview from './pages/Admin/EditReview';

function App() {
  const { pathname } = useLocation();

  return (
    <AnimatePresence>
      <Routes>
        <Route path={words.routes.user.top} element={Layout(TopPage)} />
        <Route path={words.routes.user.feature} element={Layout(FeaturePage)} />
        <Route path={words.routes.user.profile} element={Layout(ProfilePage)} />
        <Route path={words.routes.user.service} element={Layout(ServicePage)} />
        <Route path={words.routes.user.blog} element={Layout(BlogPage)} />
        <Route path={words.routes.user.review} element={Layout(ReviewPage)} />
        <Route path={words.routes.user.contact} element={Layout(ContactPage)} />
        <Route path={words.routes.user.faq} element={Layout(FAQPage)} />
        <Route path={words.routes.user.terms} element={Layout(TermOfUsePage)} />  
        <Route path={words.routes.user.policy} element={Layout(PolicyPage)} />  
        <Route path={words.routes.user.purpose} element={Layout(PurposePage)} />  
        <Route path={words.routes.user.blogcontent} element={Layout(BlogContentPage)} />  
        
        <Route path={words.routes.admin.login} element={<AdminLogin />} />

        <Route path={words.routes.admin.home} element={
          <PrivateRoute Component={<AdminHome />} />
        }/ >
        <Route path={words.routes.admin.blogmanage} element={
          <PrivateRoute Component={<BlogManagePage />} />
        }/ >
        <Route path={words.routes.admin.reviewmanage} element={
          <PrivateRoute Component={<ReviewManagePage />} />
        }/ >
        <Route path={words.routes.admin.createpost} element={
          <PrivateRoute Component={<CreatePost />} />
        }/ >
        <Route path={words.routes.admin.createreview} element={
          <PrivateRoute Component={<CreateReview />} />
        }/ >
        <Route path={words.routes.admin.editpost} element={
          <PrivateRoute Component={<EditPost />} />
        }/ >
        <Route path={words.routes.admin.editreview} element={
          <PrivateRoute Component={<EditReview />} />
        }/ >
        <Route path={words.routes.admin.lettersmanage} element={
          <PrivateRoute Component={<LettersPage />} />
        }/ >
        <Route path={words.routes.admin.subscribersmanage} element={
          <PrivateRoute Component={<SubscribersPage />} />
        }/ >

      </Routes>
    </AnimatePresence>
  );
}

export default App;
