import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore";

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { signup, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(formData);
	};

	return (
		<div className='flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-fashion-beige min-h-screen'>
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className='mt-6 text-center text-3xl font-bold text-fashion-charcoal'>
					Create your account
				</h2>
				<p className='mt-2 text-center text-sm text-gray-500'>
					Join the fashion movement
				</p>
			</motion.div>

			<motion.div
				className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className='bg-white py-8 px-6 shadow-md sm:rounded-xl sm:px-10 border border-gray-200'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						{/* Name */}
						<div>
							<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
								Full Name
							</label>
							<div className='mt-1 relative'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<User className='h-5 w-5 text-gray-400' />
								</div>
								<input
									id='name'
									type='text'
									required
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className='block w-full px-3 py-2 pl-10 bg-gray-100 border border-gray-300
										text-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2
										focus:ring-fashion-charcoal focus:border-fashion-charcoal sm:text-sm'
									placeholder='Jane Doe'
								/>
							</div>
						</div>

						{/* Email */}
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
								Email address
							</label>
							<div className='mt-1 relative'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Mail className='h-5 w-5 text-gray-400' />
								</div>
								<input
									id='email'
									type='email'
									required
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className='block w-full px-3 py-2 pl-10 bg-gray-100 border border-gray-300
										text-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2
										focus:ring-fashion-charcoal focus:border-fashion-charcoal sm:text-sm'
									placeholder='you@example.com'
								/>
							</div>
						</div>

						{/* Password */}
						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700'>
								Password
							</label>
							<div className='mt-1 relative'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' />
								</div>
								<input
									id='password'
									type='password'
									required
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									className='block w-full px-3 py-2 pl-10 bg-gray-100 border border-gray-300
										text-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2
										focus:ring-fashion-charcoal focus:border-fashion-charcoal sm:text-sm'
									placeholder='••••••••'
								/>
							</div>
						</div>

						{/* Confirm Password */}
						<div>
							<label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
								Confirm Password
							</label>
							<div className='mt-1 relative'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' />
								</div>
								<input
									id='confirmPassword'
									type='password'
									required
									value={formData.confirmPassword}
									onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
									className='block w-full px-3 py-2 pl-10 bg-gray-100 border border-gray-300
										text-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2
										focus:ring-fashion-charcoal focus:border-fashion-charcoal sm:text-sm'
									placeholder='••••••••'
								/>
							</div>
						</div>

						{/* Submit Button */}
						<button
							type='submit'
							disabled={loading}
							className='w-full flex justify-center py-2 px-4 border border-transparent
								rounded-full shadow-sm text-sm font-medium text-white bg-fashion-charcoal
								hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2
								focus:ring-black transition disabled:opacity-50'
						>
							{loading ? (
								<>
									<Loader className='mr-2 h-5 w-5 animate-spin' />
									Loading...
								</>
							) : (
								<>
									<UserPlus className='mr-2 h-5 w-5' />
									Sign up
								</>
							)}
						</button>
					</form>

					<p className='mt-6 text-center text-sm text-gray-500'>
						Already have an account?{" "}
						<Link
							to='/login'
							className='font-medium text-fashion-charcoal hover:underline inline-flex items-center gap-1'
						>
							Login here <ArrowRight className='h-4 w-4' />
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default SignUpPage;
