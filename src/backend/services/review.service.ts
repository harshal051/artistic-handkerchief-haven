
import Review, { IReview } from '../models/Review';

export const getAllReviews = async (): Promise<IReview[]> => {
  try {
    return await Review.find().populate('productId').sort({ date: -1 });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getReviewsByProductId = async (productId: string): Promise<IReview[]> => {
  try {
    return await Review.find({ productId }).sort({ date: -1 });
  } catch (error) {
    console.error(`Error fetching reviews for product with id ${productId}:`, error);
    throw error;
  }
};

export const createReview = async (reviewData: any): Promise<IReview> => {
  try {
    const review = new Review(reviewData);
    return await review.save();
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

export const deleteReview = async (id: string): Promise<IReview | null> => {
  try {
    return await Review.findByIdAndDelete(id);
  } catch (error) {
    console.error(`Error deleting review with id ${id}:`, error);
    throw error;
  }
};
