from fastapi import APIRouter, HTTPException
from ai_modules.bias_detection import detect_bias
from ai_modules.fairness_metrics import calculate_fairness

router = APIRouter()

@router.get("/bias_report")
def bias_report():
    try:
        data = detect_bias()

        if not data:
            raise HTTPException(
                status_code=404,
                detail="No bias data available"
            )

        fairness = calculate_fairness(data)

        male_rate = data.get("male_selection_rate", 0)
        female_rate = data.get("female_selection_rate", 0)

        if male_rate > 0 and female_rate > 0:

            ratio = female_rate / male_rate

            # Detect bias
            if ratio < 0.8 or ratio > 1.25:

                raise HTTPException(
                    status_code=400,
                    detail="⚠️ Potential Gender Bias Detected in Hiring Decisions"
                )

        return {
            "bias_data": data,
            "fairness_metrics": fairness,
            "message": "✅ No Bias Detected"
        }

    except HTTPException as e:
        raise e

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error generating bias report: {str(e)}"
        )