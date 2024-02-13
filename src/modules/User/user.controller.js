import userModel from "../../../DB/Models/user.model.js";

// ============================Update User API=============================//
export const updateProfile = async (req, res, next) => {
    const {_id} = req.authUser; 
    const {
        username,
        email,
        age,
        role,
        phoneNumbers,
        addresses,
    } = req.body;

    // Find the user by ID
    const user = await userModel.findById(_id);
    if (!user) {
        return next(new Error('User not found', { cause: 404 }));
    }

    // Update user profile fields
    if (username) user.username = username;
    if (email) user.email = email;
    if (age) user.age = age;
    if (role) user.role = role;
    if (phoneNumbers) user.phoneNumbers = phoneNumbers;
    if (addresses) user.addresses = addresses;

    // Save the updated user object
    await user.save();

    res.status(200).json({
        success: true,
        message: 'User profile updated successfully',
        data: user,
    });
}


// =========================================delete User API===============================//
export const deleteProfile = async (req, res, next) => {
    const {_id} = req.authUser; 

        // Find the user by ID
        const user = await userModel.findById(_id);
        if (!user) {
            return next(new Error('User not found', { cause: 404 }));
        }

        // Perform any additional authorization checks if necessary
        // For example, check if the user has permission to delete their profile

        // Delete the user
        await user.remove();

        res.status(200).json({
            success: true,
            message: 'User profile deleted successfully',
        });
  
};
