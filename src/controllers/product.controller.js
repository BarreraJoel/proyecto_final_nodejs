
export async function getAll(req, res) {
    try {
        return res.status(200).json({
            success: true,
            message: "",
            products: req.user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export async function getById(req, res) {
    try {
        return res.status(200).json({
            success: true,
            message: "",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export async function create(req, res) {
    try {
        return res.status(200).json({
            success: true,
            message: "",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export async function destroy(req, res) {
    try {
        return res.status(204).json({
            success: true,
            message: "",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};